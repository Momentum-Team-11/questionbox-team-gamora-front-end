import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";




export const QuestionDetail = ({ token }) => {
    const [question, setQuestion] = useState(null)
    const [answers, setAnswers] = useState([])
    const params = useParams()