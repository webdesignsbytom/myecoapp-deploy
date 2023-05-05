import { findAllNewsletterMembers } from '../domain/newsletter.js';
import { myEmitterErrors } from '../event/errorEvents.js';
import { myEmitterNewsletter } from '../event/newsletterEvents.js';
import { NotFoundEvent, ServerErrorEvent } from '../event/utils/errorUtils.js';
import {
  EVENT_MESSAGES,
  sendDataResponse,
  sendMessageResponse,
} from '../utils/responses.js';

export const getAllNewsletterMembers = async (req, res) => {
  console.log('get all newsletter members');

  try {

    const foundMembers = await findAllNewsletterMembers();
    console.log('found members', foundMembers);

      if (!foundMembers) {
        const notFound = new NotFoundEvent(
          req.user,
          EVENT_MESSAGES.notFound,
          EVENT_MESSAGES.newsletterTag
        );
        myEmitterErrors.emit('error', notFound);
        return sendMessageResponse(res, notFound.code, notFound.message);
      }

      myEmitterNewsletter.emit('get-all-newsletter-members', req.user);
      return sendDataResponse(res, 200, { newsletterMembers: foundMembers });
  } catch (err) {
    // Error
    const serverError = new ServerErrorEvent(
      req.user,
      `Get all newsletter members`
    );
    myEmitterErrors.emit('error', serverError);
    sendMessageResponse(res, serverError.code, serverError.message);
    throw err;
  }
};
