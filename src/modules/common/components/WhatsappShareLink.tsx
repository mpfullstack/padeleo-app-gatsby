import * as React from "react";

export interface WhatsappShareLinkProps {
  children: string;
  shareContent: string;
  phone?: string;
  encode?: boolean;
}

const WhatsappShareLink: React.FC<WhatsappShareLinkProps> = ({
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

export default WhatsappShareLink;
