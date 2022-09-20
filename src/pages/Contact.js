import React from 'react';

const Contact = () => {
return (
<div style={{textalign:"center",backgroundColor:"lavender"}}>
<h2 style={{ padding: "10px 20px", textAlign: "center", color: "green"}}>We will get back to you, Please enter the details</h2>
        <form action="/" method="POST">
        
        <table style={{textalign:"center"}}>
        <tr>
        <td>Name</td>
        <td><input type="text" class="box" id="student_name" name="student_name" placeholder="Name" required /></td>
        </tr>
        <tr>
        <td>City</td>
        <td><input type="text" class="box" id="course" name="course" placeholder="Course" required /> </td>
        </tr>
        <tr>
        <td>Mobile Number</td>
        <td><input type="text" class="box" id="age" name="age" placeholder="Age" required /></td>
        </tr>
        <tr>
        <td>Email</td>
        <td><input type="text" class="box" id="email" name="email" placeholder="Email" required /> </td>
        </tr>
        <tr>
        <td><input type="submit" value="Submit" id="submit" /></td>
        </tr>
        </table>
        </form>
        </div>

);
};

export default Contact;
