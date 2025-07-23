// ==================== IMPORTS ====================
import axiosInstance from "./axiosInstance"; // Pre-configured axios instance
import { API_PATHS } from "./apiPaths"; // Centralized API endpoint paths

// ==================== TICKET SERVICE FUNCTIONS ====================

// Create a new ticket with provided form data
export const createTicket = async (formData) => {
  const response = await axiosInstance.post(API_PATHS.TICKET.CREATE, formData);
  return response.data;
};

// Get all tickets for the current project
export const getAllTickets = async (formData) => {
  const response = await axiosInstance.get(API_PATHS.TICKET.GET_ALL, formData);
  return response.data;
};

// Get a ticket by its ID
export const getTicketById = async (id) => {
  const response = await axiosInstance.get(API_PATHS.TICKET.GET_BY_ID(id));
  return response.data;
};

// Update (patch) a ticket by its ID
export const patchTicketById = async (id, formData) => {
  const response = await axiosInstance.patch(
    API_PATHS.TICKET.PATCH_BY_ID(id),
    formData
  );
  return response.data;
};

// Delete a ticket by its ID
export const deleteTicketById = async (id) => {
  const response = await axiosInstance.delete(
    API_PATHS.TICKET.DELETE_BY_ID(id)
  );
  return response.data;
};
