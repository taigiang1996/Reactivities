import React from "react";
import { SyntheticEvent } from "react";
import { useState } from "react";
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, ItemMeta, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
}
export default function ActivityList({activities, submitting, selectActivity, deleteActivity} : Props) {
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id)
    }
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as='a' >{activity.title}</ItemHeader>
                            <ItemMeta>{activity.date}</ItemMeta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.location}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button  onClick={() => { selectActivity(activity.id)}} floated='right' content='View' color='blue' />
                                <Button loading={submitting && target === activity.id} name={activity.id} onClick={(e) => { handleActivityDelete(e, activity.id)}} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}