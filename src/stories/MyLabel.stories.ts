import { Meta, StoryObj } from "@storybook/react-vite";
import { MyLabel } from "../components/MyLabel";

const meta: Meta<typeof MyLabel> = {
    title: 'UI/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {control: 'inline-radio'},
        allCaps: { control: 'boolean' },
        color: { control: 'inline-radio' },
        fontColor: { control: 'color' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic label',
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true,
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text secondary'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom Color label',
        fontColor: "5517ac"
    }
};


export const CustomBackground: Story = {
    args: {
        size: 'h1',
        label: 'Custom Color Background label',
        fontColor: "white",
        backgroundColor: "black"
    }
};