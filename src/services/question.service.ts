import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { DropdownQuestion } from '../models/question-dropdown';
import { TextboxQuestion } from '../models/question-textbox';

@Injectable()
export class QuestionService {
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'voertuigType',
        label: 'Van welk type voertuig wilt u voertuiginformatie opzoeken?',
        required: true,
        options: [
          { key: 'auto', value: 'Auto' },
          { key: 'motor', value: 'Motor' },
          { key: 'scooter', value: 'Scooter' },
        ],
        order: 1,
        class:
          'block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0',
      }),

      new DropdownQuestion({
        key: 'autoType',
        label: 'Welk type auto heeft u?',
        options: [
          { key: 'Hatchback', value: 'Hatchback' },
          { key: 'Sedan', value: 'Sedan' },
          { key: 'Station', value: 'Station' },
          { key: 'Cabriolet', value: 'Cabriolet' },
          { key: 'Coupe', value: 'Coupé' },
          { key: 'MPV', value: 'Multi Purpose Vehicle (MVP)' },
          { key: 'Terreinauto', value: 'Terreinauto' },
        ],
        order: 2,
        class:
          'block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0',
      }),

      new DropdownQuestion({
        key: 'motorType',
        label: 'Welk type motor heeft u?',
        options: [
          { key: 'AllRoad', value: 'All-road' },
          { key: 'Naked', value: 'Naked' },
          { key: 'Station', value: 'Station' },
          { key: 'Enduro', value: 'Enduro' },
          { key: 'Race', value: 'Race' },
          { key: 'Toermotor', value: 'Toermotor' },
          { key: 'Chopper', value: 'Chopper' },
          { key: 'Zijspan', value: 'Zijspan' },
        ],
        order: 3,
        class:
          'block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0',
      }),

      new TextboxQuestion({
        key: 'kenteken',
        label: 'Vul het kenteken van uw voertuig in.',
        value: '',
        required: true,
        validateKenteken: true,
        order: 4,
        placeholder: 'Bijvoorbeeld AA-BB-12',
        class:
          'mt-1 block w-full rounded-md bg-yellow-400 border-black-400 focus:border-gray-500 focus:bg-yellow-300 focus:ring-0 text-black placeholder-black font-semibold',
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
