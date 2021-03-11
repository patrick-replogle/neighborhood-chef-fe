import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { HANDLE_REACTION } from '../../../../graphql/comments/comment-queries';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import { cardStyles } from '../../../../styles';
import Avatar from '@material-ui/core/Avatar';
import { parseTime } from '../../../../utilities/functions';

import ReplyButton from './reply-button/ReplyButton';
import ReactButton from './react-buttom/ReactButton';
import ShowEmoji from './show-emoji/ShowEmoji';

import { ADD_COMMENT } from '../../../../graphql/comments/comment-queries';

const Comment = (props) => {
    const user = useSelector((state) => state.user);
    const timeObject = parseTime(props.dateCreated);
    const classes = cardStyles();
    const [reactions, setReactions] = useState(props.Reactions);
    const [subComments, setSubComments] = useState(
        props.Subcomments ? props.Subcomments : []
    );

    const toggleEmoji = (emoji) => {
        axiosWithAuth()({
            url: `${process.env.REACT_APP_BASE_URL}/graphql`,
            method: 'post',
            data: {
                query: print(HANDLE_REACTION),
                variables: {
                    reaction: {
                        comment_id: Number(props.id),
                        user_id: Number(user.id),
                        reaction: emoji,
                    },
                },
            },
        })
            .then((res) => {
                setReactions(res.data.data.handleReaction);
            })
            .catch((err) => {
                console.dir(err);
            });
    };

    const addReply = (reply) => {
        const newComment = {
            comment: reply,
            root_id: Number(props.id),
            parent_id: 0,
            event_id: Number(props.eventId),
            user_id: Number(user.id),
        };

        axiosWithAuth()({
            url: `${process.env.REACT_APP_BASE_URL}/graphql`,
            method: 'post',
            data: {
                query: print(ADD_COMMENT),
                variables: {
                    comment: newComment,
                },
            },
        }).then(
            (res) => {
                newComment.id = res.data.data.inputComment.id;
                newComment.User = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                };
                newComment.dateCreated = Date.now();
                setSubComments([...subComments, newComment]);
            },
            (err) => console.dir(err)
        );
    };

    return (
        <div
            className={classes.singleCommentParent}
            // props.parent_id < 0
            //   ? classes.singleCommentParent
            //   : classes.singleCommentChild
            // }
        >
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    key={props.User.id}
                    title={`${props.User.firstName} ${props.User.lastName}`}
                    aria-label="avatar"
                    className={classes.avatar}
                    src={!props.User.photo ? null : props.User.photo}
                    style={{
                        marginRight: '5px',
                        width: '26px',
                        height: '26px',
                    }}
                >
                    {!props.User.photo && (
                        <Typography variant="body2">
                            {`${props.User.firstName.split('')[0]}${
                                props.User.lastName.split('')[0]
                            }`}
                        </Typography>
                    )}
                </Avatar>
                {user && (
                    <Typography variant="body1">
                        {`${props.User.firstName} ${props.User.lastName}`}
                    </Typography>
                )}
            </div>
            <Typography variant="caption" style={{ marginLeft: '17px' }}>
                {props.comment}
            </Typography>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div style={{ display: 'flex' }}>
                    <ReplyButton
                        name={`${props.User.firstName} ${props.User.lastName}`}
                        description={props.comment}
                        addReply={addReply}
                    />
                    <ReactButton
                        name={`${props.User.firstName} ${props.User.lastName}`}
                        toggleEmoji={toggleEmoji}
                    />
                    {reactions.map((item, index) => {
                        return <ShowEmoji key={index} item={item} />;
                    })}
                </div>
                <Typography variant="body2" color="textSecondary">
                    {timeObject.commentTime}
                </Typography>
            </div>
        </div>
    );
};

export default Comment;
