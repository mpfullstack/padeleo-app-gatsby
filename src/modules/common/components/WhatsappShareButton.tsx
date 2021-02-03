import * as React from "react";

export interface WhatsappShareButtonProps {
  children: string;
  shareContent: string;
  phone?: string;
  encode?: boolean;
}

const WhatsappShareButton: React.FC<WhatsappShareButtonProps> = ({
  children,
  shareContent,
  phone = "",
  encode = true,
}) => {
  let shareContentEncoded = shareContent;
  if (encode && typeof window === "object") {
    shareContentEncoded = encodeURIComponent(shareContent);
  }
  return (
    <div>
      <a href={`https://wa.me/${phone}?text=${shareContentEncoded}`}>
        {children}
      </a>
    </div>
  );
};

export default WhatsappShareButton;
