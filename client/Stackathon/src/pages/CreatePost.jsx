import React, {useState} from 'react'

import { Form, useNavigate } from 'react-router-dom'
import { preview } from '../assets'
import {getRandomPrompt} from '../utils'
import { FormField, Loader } from '../components'

const CreatePost = () => {
  const navigate = usenavigate();
  useState [Form, setForm] = useState({
    name:'',
    prompt:'',
    photo:'',
  })
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSumbit = () => {}

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  
  const generateImage = () => {}

  return (
    <section className='max-w-7x1 max-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginative and visually stunning images through DALL-E AI, and share them with the community.</p>
      </div>

      <form className='mt-16 max-w-3x1' onSubmit={handleSubmit}><div className='flex flex-col gap-5'>

<FormField labelName="Your Name"
type="text"
name="name"
placeholder="John Doe"
value={form.name}
handleChange={handleChange}/>

<FormField labelName="Prompt"
type="text"
name="prompt"
placeholder="A mountain against a star-spangled sky"
value={form.prompt}
handleChange={handleChange}
isSurpriseMe
handleSurpriseMe = {handleSurpriseMe}/>

        </div>


        <div className='mt-5 flex gap-5'>
          <button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='button' onClick={generateImage}>{generateImg ? 'Generating...': 'Generate'}</button>
        </div>

<div className='mt-10'> <p className='mt-2 text-[$666e75 text-[14x]'> Once you have create the image you want, you can share it with others in the community</p>
<button className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center' type='submit'></button> {loading ? 'Sharing...' : 'Share with the community'}</div>

        </form>

    </section>
  )
}

export default CreatePost
