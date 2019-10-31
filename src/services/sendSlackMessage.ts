import axios from 'axios';

import COLORS from 'assets/colors';
import { emojiArray } from 'assets/members';
import Member from 'types/Member';

const { REACT_APP_SLACK_URI: slackUri } = process.env;

export default async (matchedMembers: Array<Array<Member>>) => {
  try {
    if (!slackUri) {
      throw new Error('Slack URI is not defined.');
    }
    const response = await axios.post(slackUri, JSON.stringify({
      "attachments": [
        {
          "fallback": "오늘의 휴먼톡톡 파트너는 누구일까요?",
          "pretext": "오늘의 휴먼톡톡 파트너입니다. 마음에 드시나요? :blob-tongue:",
          "color": COLORS.BLUE[6],
          "fields": matchedMembers.map((matchSet, i) => {
            const memberNames = matchSet.map(member => member.name);
            const memberEmojis = matchSet.map(member => {
              const emojiRecord = emojiArray.find(record => record.name === member.name);
              return emojiRecord ? `:${emojiRecord.emoji}:` : `:${member.name.toLowerCase()}:`;
            });
            return {
              "title": `그룹 ${i + 1}`,
              "value": `${memberEmojis.join(' ')} ${memberNames.join(', ')}`,
              "short": false,
            };
          }),
        }
      ]
    }));
    return response;
  } catch (err) {
    throw err;
  }
};
