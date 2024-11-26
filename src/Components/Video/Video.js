import "./Video.css";

function Video() {
    return (
        <div className="video-container">
            <video
                controls
                className="video"
                src="https://www.w3schools.com/html/mov_bbb.mp4"
            >
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default Video;
