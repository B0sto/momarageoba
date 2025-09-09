    import React from "react";

    export interface ContactInfoItemProps {
    icon: React.ElementType;
    label: string;
    value: string;
    }

    const ContactInfoItem = ({ icon: Icon, label, value }: ContactInfoItemProps) => {
    return (
        <div className="flex items-start gap-2">
        <Icon className="text-[#3BB77E]" size={19} />
        <div className="font-lato text-[#253D4E] text-[15px] leading-[24px]">
            <span className="font-bold">{label} </span>
            <span className="inline-block align-top">{value}</span>
        </div>
        </div>
    );
    };

    export default ContactInfoItem;
