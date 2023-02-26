import Image from "../../icons/Image";
import Check from "../../icons/Check";
import Heart from "../../icons/Heart";
import Message from "../../icons/Message";
import Share from "../../icons/Share";
import More from "../../icons/More";

import "./PostList.css";

const PostInputBox = () => {
    return (
        <div className="PostInputBox">
            <textarea
                name="text"
                id="newPostText"
                placeholder="What's going on your mind..."
            ></textarea>
            <div className="button-container">
                <p>
                    <Image />
                </p>
                <p>
                    <Check />
                </p>
            </div>
        </div>
    );
};

const PostItem = () => {
    return (
        <div className="PostItem">
            <div className="post-header">
                <div className="dp-wrapper">
                    <img src="/images/dp2.jpg" alt="random" srcSet="" />
                </div>
                <h3>Title of the post</h3>
                <p className="button-more">
                    <More />
                </p>
            </div>
            <div className="image-wrapper">
                <img src="/images/nature.jpg" alt="random" srcSet="" />
            </div>
            <div className="action-section">
                <div className="post-data">
                    <p>16 likes</p>
                    <p>4 comments</p>
                </div>
                <div className="button-container">
                    <p className="action-button">
                        <Heart />
                    </p>
                    <p className="action-button">
                        <Message />
                    </p>
                    <p className="action-button">
                        <Share />
                    </p>
                </div>
            </div>
        </div>
    );
};

const PostList = () => {
    return (
        <div className="PostList">
            {/* <h2>PostList</h2> */}
            <PostInputBox />
            <div>
                <PostItem />
                <PostItem />
                <PostItem />
            </div>
        </div>
    );
};

export default PostList;
