/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };
    const notify = () => {
      toast.success('Message sent successfully !!!', {
        position: 'bottom-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        console.log('Success');
        reset(); // Reset the form
        notify();
        console.log('After if statement');
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Giorgi Chikviladze</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className=" mt-[20px] flex flex-col gap-[20px]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-4  hover:scale-110 ease-in duration-300 flex justify-between">
                    <AiOutlineMail />{' '}
                    <span className="text-[#5651e5]">
                      chikviladze555@gmail.com
                    </span>
                  </div>

                  <div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4  hover:scale-110 ease-in duration-300 flex justify-between">
                      <AiOutlinePhone />{' '}
                      <span className="text-[#5651e5]">(995) 551 13 99 07</span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Link
                      href="https://www.linkedin.com/in/giorgi-chikviladze-514444261/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                      </div>
                    </Link>
                    <Link
                      href="https://github.com/CHIKVILADZE"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmitForm)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300  ${
                        errors.name && 'border-red-600'
                      }`}
                      type="text"
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                      })}
                    />
                    {errors?.name && (
                      <span className="text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                        errors.phone && 'border-red-600'
                      }`}
                      type="text"
                      {...register('phone', {
                        required: {
                          value: true,
                          message: 'Please enter your phone number',
                        },
                        minLength: {
                          value: 3,
                          message: 'Min 3 char.',
                        },
                      })}
                    />
                    {errors?.phone && (
                      <span className="text-red-500">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      errors.email && 'border-red-600'
                    }`}
                    type="email"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'You must enter your email',
                      },
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter correct email format',
                      },
                    })}
                  />
                  {errors?.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex border-gray-300 ${
                      errors.subject && 'border-red-600'
                    }`}
                    type="text"
                    {...register('subject', {
                      required: {
                        value: true,
                        message: 'You must enter subject',
                      },
                    })}
                  />
                  {errors?.subject && (
                    <span className="text-red-500">
                      {errors.subject.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className={`border-2 rounded-lg p-3 border-gray-300 ${
                      errors.message && 'border-red-600'
                    }`}
                    rows="10"
                    {...register('message', {
                      required: {
                        value: true,
                        message: 'You must enter message',
                      },
                      minLength: {
                        value: 20,
                        message: 'Your message must be min 20 char.',
                      },
                      maxLength: {
                        value: 1000,
                        message:
                          "Your message can't be more than 1000 characters",
                      },
                    })}
                  ></textarea>
                  {errors?.message && (
                    <span className="text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
