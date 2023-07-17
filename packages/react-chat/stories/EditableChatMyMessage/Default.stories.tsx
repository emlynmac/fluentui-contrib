import * as React from 'react';
import { Chat, EditableChatMyMessage } from '@fluentui-contrib/react-chat';

export const Default = () => {
  return (
    <Chat>
      <EditableChatMyMessage>This is editable</EditableChatMyMessage>
    </Chat>
  );
};
