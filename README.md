# react-otpinput

Customizable OTP Input component for the web built with React.js

## API:

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Required</th>
            <th>Default value</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>type</td>
            <td>String</td>
            <td>false</td>
            <td>'text'</td>
            <td>Type inputs.</td>
        </tr>
        <tr>
            <td>value</td>
            <td>String</td>
            <td>true</td>
            <td>''</td>
            <td>The value of the OTP Input.</td>
        </tr>
        <tr>
            <td>onChange</td>
            <td>Function</td>
            <td>true</td>
            <td>console.log</td>
            <td>Returns OTP values typed in inputs.</td>
        </tr>
        <tr>
            <td>numInputs</td>
            <td>Number</td>
            <td>false</td>
            <td>4</td>
            <td>Number of inputs.</td>
        </tr>
        <tr>
            <td>classNames</td>
            <td>String</td>
            <td>false</td>
            <td>'otp-input'</td>
            <td>Class names for OTP Input component.</td>
        </tr>
        <tr>
            <td>onChangeRegex</td>
            <td>RegEx</td>
            <td>false</td>
            <td>none</td>
            <td>RegEx for single onChange.</td>
        </tr>
        <tr>
            <td>labelText</td>
            <td>String</td>
            <td>false</td>
            <td>none</td>
            <td>Aria-label attribute for inputs.</td>
        </tr>
        <tr>
            <td>autoComplete</td>
            <td>String</td>
            <td>false</td>
            <td>'off'</td>
            <td>AutoComplete props for first input.</td>
        </tr>
        <tr>
            <td>autoFocus</td>
            <td>Boolean</td>
            <td>false</td>
            <td>false</td>
            <td>AutoFocus on first input.</td>
        </tr>
        <tr>
            <td>separator</td>
            <td>Component</td>
            <td>false</td>
            <td>none</td>
            <td>Separator between inputs.</td>
        </tr>
        <tr>
            <td>inputProps</td>
            <td>Object</td>
            <td>false</td>
            <td>none</td>
            <td>Props for inputs.</td>
        </tr>
    </tbody>
</table>
