import React, { useEffect, useState, useRef } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import InputField from './InputField';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEmpData } from '../../context'



export default AddEmployee