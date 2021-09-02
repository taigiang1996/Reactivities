import { observer } from "mobx-react-lite";
import React from "react";
import { SyntheticEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, ItemContent, ItemDescription, ItemExtra, ItemHeader, ItemMeta, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityList() {
    const {activityStore} = useStore();
    const {deleteActivity, activitiesByDate, loading} = activityStore;
    const [target, setTarget] = useState('');

    function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteActivity(id)
    }
    
    return (
        <Segment>
            <Item.Group divided>
                {activitiesByDate.map(activity => (
                    <Item key={activity.id}>
                        <ItemContent>
                            <ItemHeader as='a' >{activity.title}</ItemHeader>
                            <ItemMeta>{activity.date}</ItemMeta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}, {activity.location}</div>
                            </ItemDescription>
                            <ItemExtra>
                                <Button as={Link} to={`/activities/${activity.id}`} floated='right' content='View' color='blue' />
                                <Button loading={loading && target === activity.id} name={activity.id} onClick={(e) => { handleActivityDelete(e, activity.id)}} floated='right' content='Delete' color='red' />
                                <Label basic content={activity.category} />
                            </ItemExtra>
                        </ItemContent>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
})