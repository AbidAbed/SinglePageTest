import "./Video.css"
function Video() {
    return <div className="video-container">
        <iframe width="100%" height="100%"
        className="video-container"
            src="https://www.youtube.com/embed/HBH0473BYLk?list=RDHBH0473BYLk"
            title="YEAT - TAKEOVER [PROD. SANIKWAVE X SKY]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

        </iframe>
    </div>
}

export default Video

