"use client"
import { PhotoIcon } from '@heroicons/react/24/solid'
import { Country, State, City, } from 'country-state-city';
import { useEffect, useRef, useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { v4 } from 'uuid';
import { toast } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '@/lib/firebase/config';
import SuccessAlert from '../misc/SuccessAlert';

export default function careerForm({ jobs }) {
  // USE STATE FOR STATE AND CITIES
  const [selectedCountry, setSelectedCountry] = useState('IN'); // Default country is India
  const [selectedState, setSelectedState] = useState('');
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCities, setSelectedCities] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [percentage, setPercentage] = useState(null)

  // USE STATE FOR ATTACHED RESUME
  const [resume, setResume] = useState('');

  // DATE OBJECT
  const currentdate = new Date();

  // FORM STATE
  const [formData, setFormData] = useState({

    timestamp: currentdate.toLocaleDateString() + " @ " + currentdate.toLocaleTimeString('en-US', {
      hour12: true,
      hour: "numeric",
      minute: "numeric"
    })
  });

  useEffect(() => {
    const fetchedStates = State.getStatesOfCountry(selectedCountry);
    setStates(fetchedStates);
    setSelectedState(''); // Reset state when country changes
    setSelectedCities('');
    setResume('')
    setCities([]); // Reset cities when country changes
  }, []);

  // WHEN A USER SELECTS A STATE THEN SET THE CITIES TO THE CITIES ARRAY
  useEffect(() => {
    const stateCities = City.getCitiesOfState("IN", selectedState);
    setCities(stateCities);
  }, [selectedState]);

  const fileType = {
    contentType: 'application/pdf'
  }

  useEffect(() => {
    const uploadResume = () => {
      const name = new Date().getTime() + resume.name
      const storageRef = ref(storage, `resume/${name}`)

      const uploadTask = uploadBytesResumable(storageRef, 'resume/' + name, fileType);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          setPercentage(progress);
          switch (snapshot.state) {
            case 'paused':
              // console.log('Upload is paused');
              break;
            case 'running':
              // console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          // console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('Resume available at', downloadURL);

            setFormData(prevData => ({
              ...prevData,
              resume: downloadURL,
            }));
          });
        }
      );

    }

    uploadResume();
  }, [resume])

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();

    const requestData = { data: [formData] };
    fetch('https://sheetdb.io/api/v1/vmyoilv51x1fg', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => response.json())
      .then((data) => toast.success("Your application has been submitted"))
    setSuccess('Your application has been submitted')
      .catch((err) => { // console.log(err) })

    setLoading(false);
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-10 divide-y divide-gray-900/10 ">

      <div className="grid grid-cols-1 gap-x-8 lg:pt-6 md:grid-cols-3">
        <div className="px-4 sm:px-0">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Applicants Information</h2>
          <p className=" text-sm mt-3 leading-6 text-gray-600">Use a permanent email address where you can receive mail.</p>
        </div>

        <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl rounded-lg md:col-span-2" onSubmit={handleSubmit} id='sheetdb form'>
          <div className="px-4 py-6 sm:p-8">

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

              {/* FIRST NAME */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first name"
                    id="first-name"
                    autoComplete="given-name"
                    onChange={handleInputChange}
                    placeholder='First name'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* LAST NAME */}
              <div className="sm:col-span-3">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last name"
                    id="last-name"
                    autoComplete="family-name"
                    onChange={handleInputChange}
                    placeholder='Last name'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email address"
                    type="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    placeholder='Email address'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* PHONE NUMBER */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="phone number"
                    id="phoneNumber"
                    autoComplete="salary"
                    onChange={handleInputChange}
                    placeholder='Phone number'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* POSITION */}
              <div className="sm:col-span-3">
                <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                  Applied for position
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="position"
                    autoComplete="position-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option value="">Select position</option>
                    {jobs?.map((state, index) => (
                      <option key={index} value={state.jobPosition}>{state.jobPosition}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* EXPERIENCE IN MONTHS */}
              <div className="sm:col-span-3">
                <label htmlFor="position" className="block text-sm font-medium leading-6 text-gray-900">
                  Relevant Experience (In Months)
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="relevant experience"
                    id="experience"
                    autoComplete="given-name"
                    onChange={handleInputChange}
                    required
                    placeholder='Relevant Experience'
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* EXPECTED SALARY IN HAND */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Expected Salary in Hand
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="expected salary"
                    id="expectedSalary"
                    autoComplete="salary"
                    onChange={handleInputChange}
                    placeholder='Expected Salary'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* CURRENT SALARY IN HAND */}
              <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Current Salary in Hand
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="current salary"
                    id="currentSalary"
                    autoComplete="currentSalary"
                    onChange={handleInputChange}
                    placeholder='Current Salary'
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* DOB */}
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Date of birth
                </label>
                <div className="mt-2">
                  <input
                    id="dob"
                    name="date of birth"
                    type="date"
                    autoComplete="dob"
                    onChange={handleInputChange}
                    required
                    className="block w-9/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* STATE/PROVINCE */}
              <div className="sm:col-span-3">
                <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                  State / Province
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="state"
                    autoComplete="state-name"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    onChange={(e) => { setSelectedState(e.target.value); handleInputChange(e) }}
                  >
                    <option value="">Select State</option>
                    {states?.map((state) => (
                      <option value={state.isoCode}>{state.name}</option>
                    ))}
                  </select>
                </div>

              </div>


              {/* CITY */}
              <div className="sm:col-span-2 sm:col-start-1">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <select
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <option value="">Select City</option>
                    {
                      cities?.map((city) => (
                        <option value={city.name}>{city.name}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-2 sm:col-span-2 sm:mt-10">
              <div className="flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload your Resume</span>
                      <input id="file-upload" required name="resume" accept='.pdf' type="file" className="sr-only" onChange={(e) => setResume(e.target.files[0])} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                  {resume && (<span className='text-xs text-gray-700 flex items-center justify-center gap-2'>{resume.name}
                    <IconX className='w-5 h-5 cursor-pointer' onClick={() => setResume('')} /></span>)}
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 lg:px-10 px-4 py-4 sm:px-8">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-300"
              disabled={!resume}

            >
              Submit your Application
            </button>
          </div>
        </form>

        {success && <SuccessAlert message={success} />}
      </div>
    </div>
  )
}
}