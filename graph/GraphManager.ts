import {Client} from '@microsoft/microsoft-graph-client';
import {GraphAuthProvider} from './GraphAuthProvider';

// Set the authProvider to an instance
// of GraphAuthProvider
const clientOptions = {
  authProvider: new GraphAuthProvider(),
};

// Initialize the client
const graphClient = Client.initWithMiddleware(clientOptions);

export class GraphManager {
  static getEvents = async () => {
    // GET /me/events
    return (
      graphClient
        .api('/me/events')
        // $select='subject,organizer,start,end'
        // Only return these fields in results
        .select('subject,organizer,start,end')
        // $orderby=createdDateTime DESC
        // Sort results by when they were created, newest first
        .orderby('createdDateTime DESC')
        .get()
    );
  };

  static getUserAsync = async () => {
    // GET /me
    return graphClient.api('/me').get();
  };
  static getUserPhotoAsync = async () => {
    // GET /me
    return graphClient.api('/me/photo/$value').get();
  };
}
