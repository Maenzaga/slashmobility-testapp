import "./styles.sass"

export const UserCard = () => {
    return(
        <div className="user-card">
            <div className="card-header"></div>
            <div className="card-content">
                <div className="first-row">
                    <input placeholder="Username" className="first-row_user"/>
                    <input placeholder="Email" className="first-row_mail"/>
                </div>
                <div className="second-row">
                    <input type="radio" name="Gender" className="first-row_mail"/>
                    <input type="radio" name="Gender" className="first-row_mail"/>
                </div>
            </div>
        </div>
    )
}