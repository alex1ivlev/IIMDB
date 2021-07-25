import React, {useState, useEffect} from "react";
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const login = payload => api.post(`/users/login`, payload)
export const addMovie = payload => api.post(`/movies`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movies/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movies/${id}`)
export const getMovieById = id => api.get(`/movies/${id}`)
export const getMovieReviews = id => api.get(`/movies/${id}/reviews`)

const apis = {
    login,
    addMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    getMovieReviews
}

export default apis;
