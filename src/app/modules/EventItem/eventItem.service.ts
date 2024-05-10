import { TEventItem } from "./eventItem.interface";
import { EventItem } from "./eventItem.model";

// create user /register user
const createEventItemIntoDB = async (payload: TEventItem) => {
  const result = await EventItem.create(payload);

  return result;
};
const getEventItemFromDB = async () => {
  const result = await EventItem.find();
  return result;
};
const getSingleEventItemFromDB = async (id:string) => {
  const result = await EventItem.findById(id);

  return result;
};

const updateEventItemFromDB = async (id:string, payload: TEventItem) => {
  const updateEventItem = await EventItem.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updateEventItem;
};
const deleteEventItemFromDB = async (id:string) => {
  const deleteEventItem = await EventItem.findByIdAndDelete(id);
  return deleteEventItem;
};
export const EventItemService = {
  createEventItemIntoDB,
  getEventItemFromDB,
  getSingleEventItemFromDB,
  updateEventItemFromDB,
  deleteEventItemFromDB,
};
