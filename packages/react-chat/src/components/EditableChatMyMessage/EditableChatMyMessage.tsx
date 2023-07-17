import * as React from 'react';

import { ChatMyMessage } from '../ChatMyMessage/ChatMyMessage';
import { ChatMyMessageProps } from '../ChatMyMessage/ChatMyMessage.types';
import { Textarea } from '@fluentui/react-components';

/**
 * EditableChatMyMessage component - renders ChatMyMessage with editable content
 */
export const EditableChatMyMessage = React.forwardRef<
  HTMLDivElement,
  ChatMyMessageProps
>((props, ref) => {
  const editableContent = React.useMemo(() => {
    return <Textarea />;
  }, [props.content]);
  return <ChatMyMessage {...props} body={editableContent} ref={ref} />;
});
EditableChatMyMessage.displayName = 'EditableChatMyMessage';
