import { api } from "./api";

export const contactService = {
  getContacts: () => api.get("/contacts"),
  createContact: (contact) => api.post("/contacts", contact),
  updateContact: (id, contact) => api.put(`/contacts/${id}`, contact),
  deleteContact: (id) => api.delete(`/contacts/${id}`),
};