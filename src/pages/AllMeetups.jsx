import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setloadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-7a51e-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setloadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section className="AllMeetups">
      <h1>All Meetups</h1>

      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
