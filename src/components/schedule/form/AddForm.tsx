import React from "react";

// interface TableProps {
//   weekday: string;
//   data: ScheduleProps[];
// }

const AddForm = () => {
  return (
    <form name="" action="" method="post">
      <div className="content-wrap">
        <div className="form-list">
          <h3>Start Time</h3>
          <div className="form-start">
            <div className="form-select">
              <select name="" id="">
                <option value="">00</option>
                <option value="">01</option>
                <option value="">02</option>
                <option value="">03</option>
                <option value="">04</option>
                <option value="">05</option>
              </select>
              <span>:</span>
              <select name="" id="">
                <option value="">05</option>
                <option value="">10</option>
                <option value="">15</option>
                <option value="">20</option>
              </select>
            </div>
            <div className="form-radio">
              <input type="radio" name="time" id="am" />
              <label htmlFor="am">AM</label>
            </div>
            <div className="form-radio">
              <input type="radio" name="time" id="pm" />
              <label htmlFor="pm">PM</label>
            </div>
          </div>
        </div>
        <div className="form-list">
          <h3>Repeat on</h3>
          <div className="form-repeat">
            <div className="form-check">
              <input type="checkbox" name="days" id="monday" />
              <label htmlFor="monday">Monday</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="days" id="tuesday" />
              <label htmlFor="tuesday">Tuesday</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="days" id="wednesday" />
              <label htmlFor="wednesday">Wednesday</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="days" id="thursday" />
              <label htmlFor="thursday">Thursday</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="days" id="friday" />
              <label htmlFor="friday">Friday</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="days" id="saturday" />
              <label htmlFor="saturday">Saturday</label>
            </div>
            <div className="form-check">
              <input type="checkbox" name="days" id="sunday" />
              <label htmlFor="sunday">Sunday</label>
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-type1 large form-btn">
        Save
      </button>
    </form>
  );
};

export default AddForm;
