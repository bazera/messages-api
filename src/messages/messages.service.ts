import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findALl() {
    return this.messagesRepo.findALl();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
