import React from "react";

import { Avatar } from "./Avatar";

export default {
  title: "Design System/Avatar",
  component: Avatar,
  /*
   * More on Storybook argTypes at:
   * https://storybook.js.org/docs/react/api/argtypes
   */
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["tiny", "small", "medium", "large"],
    },
  },
};

/* export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
}; */

export const Standard = {
  args: {
    size: "large",
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554",
  },
};
/* export const Sizes = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Sizes.args = {
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
}; */

export const Sizes = {
  args: {
    username: "Tom Coleman",
    src: "https://avatars2.githubusercontent.com/u/132554",
  },
  render: (args) => (
    <>
      <Avatar {...args} size="large" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="small" />
      <Avatar {...args} size="tiny" />
    </>
  ),
};

/* export const Initials = (args) => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
); */

export const Initials = {
  render: (args) => (
    <>
      <Avatar username="Tom Coleman" />
      <Avatar username="Dominic Nguyen" />
      <Avatar username="Kyle Suss" />
      <Avatar username="Michael Shilman" />
    </>
  ),
};

/* export const Loading = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
Loading.args = {
  loading: true,
}; */

export const Loading = {
  args: {
    loading: true,
  },
  render: (args) => (
    <>
      <Avatar {...args} size="large" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="small" />
      <Avatar {...args} size="tiny" />
    </>
  ),
};

/* export const Large = (args) => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);
 */

export const Large = {
  render: () => (
    <>
      <Avatar loading size="large" />
      <Avatar size="large" username="Tom Coleman" />
      <Avatar
        size="large"
        username="Tom Coleman"
        src="https://avatars2.githubusercontent.com/u/132554"
      />
    </>
  ),
};

// /*
//  * New story using Controls
//  * Read more about Storybook templates at:
//  * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
//  */
// const Template = (args) => <Avatar {...args} />;

// export const Controls = Template.bind({});
// /*
//  * More on args at:
//  * https://storybook.js.org/docs/react/writing-stories/args
//  */
// Controls.args = {
//   loading: false,
//   size: 'tiny',
//   username: 'Dominic Nguyen',
//   src: 'https://avatars2.githubusercontent.com/u/263385',
// };

export const Controls = {
  /*
   * More on args at:
   * https://storybook.js.org/docs/react/writing-stories/args
   */
  args: {
    loading: false,
    size: "tiny",
    username: "Dominic Nguyen",
    src: "https://avatars2.githubusercontent.com/u/263385",
  },
  render: (args) => <Avatar {...args} />,
};
