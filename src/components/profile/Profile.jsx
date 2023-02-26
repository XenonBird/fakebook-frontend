import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="top-section">
        <div className="cover-wrapper">
          <img src="/images/nature.jpg" alt="" srcSet="" />
        </div>
        <div className="dp-wrapper">
          <img src="/images/dp2.jpg" alt="" srcSet="" />
        </div>
        <h2 className="name">Anthony Edward Stark</h2>
        <div className="follow-data">
          <p>
            Followers <br /> 43
          </p>
          <p>
            Following <br /> 65
          </p>
        </div>
      </div>
      <div className="data-section">
        <h3>Details</h3>
        <table>
          <tr>
            <td>Age</td>
            <td>23</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>male</td>
          </tr>
          <tr>
            <td>Place</td>
            <td>Kolkata</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Profile;
