import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

// Create Ticket
export const createTicket = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.TICKET.CREATE, formData);
  return response.data;
};

// Get All Tickets for Current project
export const getAllTickets = async (formData) => {
  const response = await axiosInstance.get(API_PATHS.TICKET.GET_ALL, formData);
  return response.data;
};

// Get Ticket by id
export const getTicketById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.TICKET.GET_BY_ID(id));
  return response.data;
};

// Patch Ticket by id
export const patchTicketById = async (id, formData) => {
  const response = await axiosInstance.patch(
    API_PATHS.TICKET.PATCH_BY_ID(id),
    formData
  );
  return response.data;
};

// Delete Ticket by id
export const deleteTicketById = async (id) => {
  const response = await axiosInstance.delete(
    API_PATHS.TICKET.DELETE_BY_ID(id)
  );
  return response.data;
};
