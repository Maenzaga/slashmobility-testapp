import "./styles.sass"

interface UserCardProps {
    bannerImg?: string
    userImg?: string
}
export const UserCard = (props: UserCardProps) => {
    return(
        <div className="user-card">
            <div className="card-header">
                <img src={props.bannerImg} className="banner-image"/>
            </div>
            <img src={props.userImg} className="user-image"/>
            <div className="card-content">
                <div className="first-row">
                    <input placeholder="Username" className="first-row_user"/>
                    <input placeholder="Email" className="first-row_mail"/>
                </div>
                <h4>Gender</h4>
                <div className="second-row">
                    <input type="radio" name="Gender" className="first-row_mail"/>
                    <input type="radio" name="Gender" className="first-row_mail"/>
                </div>
                <textarea>Bio</textarea>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}