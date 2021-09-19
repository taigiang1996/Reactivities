import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity
}

export default function ActivityListItem({ activity }: Props) {

    // const { activityStore } = useStore();
    // const { deleteActivity } = activityStore;
    // const [target, setTarget] = useState('');

    // function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    //     setTarget(e.currentTarget.name);
    //     deleteActivity(id)
    // }

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src='/assets/user.png' />
                        <Item.Content>
                            <Item.Header as={Link} to={`/activities/${activity.id}`} >
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Host by Tai</Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{activity.date}
                    <Icon name='marker' />{activity.location}
                </span>
            </Segment>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button as={Link} to={`/activities/${activity.id}`} color='teal' floated='right' content='view' />
            </Segment>
        </Segment.Group>
    )
}