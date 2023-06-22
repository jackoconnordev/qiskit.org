import EventsAirtableRecords from "./event-conversion-utils";
import { writeJSONToFile } from "./utils/conversion-utils";
import {
  fetchPastCommunityEventsMock,
  fetchPastSeminarSeriesEventsMock,
  fetchUpcommingCommunityEventsMock,
  fetchUpcommingSeminarSeriesEventsMock,
} from "./mock-services/events-mock-service";

const { MOCK_CONTENT } = process.env;

export default async function (apiKey: string, outputFolder: string) {
  let communityEventsAirtableRecords;
  let upcomingCommunityEvents;
  let pastCommunityEvents;
  let seminarSeriesEventsAirtableRecords;
  let upcomingSeminarSeriesEvents;
  let pastSeminarSeriesEvents;

  if (!MOCK_CONTENT) {
    communityEventsAirtableRecords = new EventsAirtableRecords(
      apiKey,
      "Add to Event Site"
    );
    upcomingCommunityEvents =
      await communityEventsAirtableRecords.fetchCommunityEvents(62);
    pastCommunityEvents =
      await communityEventsAirtableRecords.fetchCommunityEvents(-31);

    seminarSeriesEventsAirtableRecords = new EventsAirtableRecords(
      apiKey,
      "Seminar Series ONLY"
    );
    upcomingSeminarSeriesEvents =
      await seminarSeriesEventsAirtableRecords.fetchSeminarSeriesEvents(31);
    pastSeminarSeriesEvents =
      await seminarSeriesEventsAirtableRecords.fetchSeminarSeriesEvents(-62);
  } else {
    upcomingCommunityEvents = await fetchUpcommingCommunityEventsMock();
    pastCommunityEvents = await fetchPastCommunityEventsMock();
    upcomingSeminarSeriesEvents = await fetchUpcommingSeminarSeriesEventsMock();
    pastSeminarSeriesEvents = await fetchPastSeminarSeriesEventsMock();
  }

  const eventsAndOutputFilename = [
    {
      events: upcomingCommunityEvents,
      outputFilename: "upcoming-community-events.json",
    },
    {
      events: pastCommunityEvents,
      outputFilename: "past-community-events.json",
    },
    {
      events: upcomingSeminarSeriesEvents,
      outputFilename: "upcoming-seminar-series-events.json",
    },
    {
      events: pastSeminarSeriesEvents,
      outputFilename: "past-seminar-series-events.json",
    },
  ];

  await Promise.all(
    eventsAndOutputFilename.map((curr) =>
      writeJSONToFile(outputFolder, curr.outputFilename, curr.events)
    )
  );
}
