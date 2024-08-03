const Notification = (type = "info", msg, closeBtn) => {
    return (
        <div>
            {type}
            {msg}
        </div>
    )
}

export default Notification;