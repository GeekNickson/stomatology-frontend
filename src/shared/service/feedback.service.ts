import { authHost, host } from '../../http/axios';
import { Feedback } from '../model/feedback.model';

interface FeedbackRequest {
  text: string;
  rating: number;
  patientId: number;
}

class FeedbackService {
  public findLast() {
    return host.get<Feedback[]>(`api/public/feedback`);
  }

  public create(data: FeedbackRequest) {
    return authHost.post<Feedback>(`api/feedback`, data);
  }
}

export const feedbackService = new FeedbackService();
