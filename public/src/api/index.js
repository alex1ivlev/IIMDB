import React, {useState, useEffect} from "react";
import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:8000/api',
})

client.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token !== null ) {
        config.headers.Authorization = "Bearer " + token;
    }
    return config;
});

export const login = payload => client.post(`/users/login`, payload)
export const register = payload => client.post(`users`, payload)
export const addMovie = payload => client.post(`/movies`, payload)
export const getAllMovies = () => client.get(`/movies`)
export const updateMovieById = (id, payload) => client.put(`/movies/${id}`, payload)
export const deleteMovieById = id => client.delete(`/movies/${id}`)
export const getMovieById = id => client.get(`/movies/${id}`)
export const getMovieReviews = id => client.get(`/movies/${id}/reviews`)

const api = {
    login,
    register,
    addMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    getMovieReviews
}

export default api;
