import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
const NewMeetupForm = ({ onAddMeetup }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (even) => {
    even.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(meetupData);
  };

  return (
    <div className="NewMeetupForm">
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meet up Title</label>
            <input type="text" id="title" required ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Meet up Image</label>
            <input type="url" id="image" required ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Meet up address</label>
            <input type="text" id="address" required ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Meet up description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            />
          </div>
          <div className={classes.actions}>
            <button>Add meetup</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewMeetupForm;
