export default function AddEmployeeScreen() {

    function number1() {
        console.log("Function 1");
    }

    function number2() {
        console.log("Function 2");
    }

    return(

        <div>
            <h1>Employee Registration</h1>

            <form>
                
                <button onClick={() => {
                    number1()
                    number2()
                }}>Submit</button>
            </form>
        </div>

    );
}