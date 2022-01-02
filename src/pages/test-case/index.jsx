import React from "react";
import './index.css'
import AddTestCase from "../../components/add-test-case/AddTestCase";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaDownload, FaTrashAlt } from "react-icons/fa";

const TestCase = () => {
    const navigate = useNavigate();
    function thisFileUpload() {
        document.getElementById("file").click();
    };
    return (
        <div className="TestCase">
            <div className="TestCase__title">Test Cases</div>
            <div className="TestCase__description">
                A test case consists of input values to the program and the expected output.
                Input will be fed to the program's STDIN and output will be expected in STOUT.
            </div>
            <button className="TestCase__Button Button__AddTestCase">✚ Add test case</button>
            <label for="actual-btn" className="border border-solid border-black cursor-pointer p-2 rounded-r-md">🔝Upload as .zip</label>
            <input type="file" id="actual-btn" hidden />
            <table class="table-auto dataTable">
                <thead>
                    <tr>
                        <th width="250">Name</th>
                        <th width="100">Difficulty</th>
                        <th width="100">Score</th>
                        <th width="150">Input size</th>
                        <th width="150">Output size</th>
                        <th width="250">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(item => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.difficulty}</td>
                            <td>{item.score}</td>
                            <td>{item.input_size}</td>
                            <td>{item.output_size}</td>
                            <td>
                                <div class="flex">
                                    <FaEdit className="cursor-pointer"/>&nbsp;&nbsp;
                                    <FaDownload className="cursor-pointer"/>&nbsp;&nbsp;
                                    <FaTrashAlt className="cursor-pointer"/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddTestCase />
        </div>
    )
}

const rows = [
    { id: 1, name: 'TestCase 1', difficulty: 10, score: 5, input_size: '10 Bytes', output_size: '1 Byte' },
    { id: 2, name: 'TestCase 2', difficulty: 15, score: 10, input_size: '20KB', output_size: '2 Bytes' },
    { id: 3, name: 'TestCase 3', difficulty: 20, score: 10, input_size: '18KB', output_size: '1 Byte' },
    { id: 4, name: 'TestCase 4', difficulty: 10, score: 5, input_size: '37.1KB', output_size: '1 Byte' },
    { id: 5, name: 'TestCase 5', difficulty: 15, score: 10, input_size: '10KB', output_size: '2 Bytes' },
    { id: 6, name: 'TestCase 6', difficulty: 10, score: 5, input_size: '1.97KB', output_size: '1 Byte' },
    { id: 7, name: 'TestCase 7', difficulty: 15, score: 10, input_size: '18KB', output_size: '1 Byte' },
    { id: 8, name: 'TestCase 8', difficulty: 25, score: 15, input_size: '380KB', output_size: '4 Bytes' },
];
export default TestCase;