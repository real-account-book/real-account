import { BASE_URL } from "./BASE_URL";

export interface Event {
  plus_id?: number;
  plus?: number;
  minus?: number;
  title: string;
  content: string;
  uploaded_at: string;
}

export const getEvents = async (startDate: string, endDate: string): Promise<Event[]> => {
  try {
    const plusResponse = await fetch(`${BASE_URL}/total/plus/${startDate}/${endDate}`);
    const minusResponse = await fetch(`${BASE_URL}/total/minus/${startDate}/${endDate}`);

    if (!plusResponse.ok || !minusResponse.ok) {
      throw new Error('Failed to fetch events');
    }

    const plusEvents = await plusResponse.json();
    const minusEvents = await minusResponse.json();

    return [...plusEvents, ...minusEvents];
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
};