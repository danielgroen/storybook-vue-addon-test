import Button from "./Button.vue";

export default {
  title: "Button",
  //👇 Creates specific parameters for the story
  parameters: {
    myAddon: {
      data: "this data is passed to the addon",
    },
  },
};

export const Primary = () => ({
  components: { Button },
  template: '<Button label="Hello" />',
});
