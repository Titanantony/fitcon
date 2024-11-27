import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import HealthCard from "./HealthCard";
import "./styles.css";


function Routinecards() {
   return (
    <div className="container my-5">
      {/* Header */}
      <Header title="Achieve your Health Objectives in 1-2-3" />

      {/* Cards Section */}
      <div className="row">
        {/* Card 1 */}
        <HealthCard
          icon="🎯"
          title="Smart Coach"
          description="Turn your phone or smartwatch into your coach—track your workouts and get tons of data and tips to help you run better."
        />

        {/* Card 2 */}
        <HealthCard
          icon="🏃‍♂️"
          title="Tailored Training Plans"
          description="Marathon? 5K? Get tailored training plans created specifically for you and your objectives, no matter where you are at."
        />

        {/* Card 3 */}
        <HealthCard
          icon="🌟"
          title="Custom Challenges"
          description="Create your own custom challenges to push yourself and your friends. For extra motivation, reach out and find support."
          extraContent={
            <div>
              <p><span role="img" aria-label="sunrise">🌅</span> Morning Entry: Added</p>
              <p><span role='img' aria-label="crescent moon">🌙</span> Evening Reflection: Not yet added. Please add now.</p>
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Routinecards