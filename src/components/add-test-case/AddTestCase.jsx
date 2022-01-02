const AddTestCase = () => {
  return (
    <div className="AddTestCase">
      <div className="AddTestCase__title">
        <b>ADD TEST CASE</b>
      </div>
      <form>
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <label for="fname">Name:</label> <br></br>
            <input type="text" id="tc_name" name="fname"></input><br></br>
            <label for="lname">Input:</label><br></br>
            <input type="text" id="tc_input" name="lname"></input><br></br>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <label for="lname">Difficulty:</label><br></br>
                <input type="text" id="tc_difficulty" name="lname"></input><br></br>
              </div>
              <div className="col-span-1">
                <label for="lname">Score:</label><br></br>
                <input type="text" id="tc_score" name="lname"></input><br></br>
              </div>
            </div>
            <label for="lname">Expect Output:</label><br></br>
            <input type="text" id="tc_output" name="lname"></input><br></br>
          </div>
          <div className="col-span-1 pt-3 pb-3">
            <input type="checkbox" id="tc_checkbox" name="tc_checkbox" value="Sample test case"></input>
            <label for="tc_checkbox"> <b>Mark as a sample test case</b> </label><br></br>
            <button className="border border-solid border-black cursor-pointer py-1 px-3 mt-3 mb-3 bg-emerald-500 text-white">
              SAVE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTestCase;
