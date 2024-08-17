import React, { useEffect, useState } from "react";
import { useGetIpInfoQuery } from "../../api/ipSearchApi";
import {
  SearchedForm,
  ErrorMessage,
  Heading,
  InputWrapper,
  IPInfoWrapper,
  MapPlaceholder,
  SearchButton,
  SearchInput,
  SubHeading,
  IPInfoLabel,
  IPInfoValue,
  IPInfoContainer,
  IpAddressItem,
  LatitudeItem,
  CountryItem,
  LongitudeItem,
  RegionItem,
  CityItem,
  SearchedWrapper,
} from "./IpSearchStyle";
import { useForm } from "react-hook-form";
import { onKeyNumber, validateIpv4, validateIpv6 } from "../../utils/validators";
import { toast, ToastContainer } from "react-toastify";

const IpSearchPage = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const {
    data: ipInfo,
    error,
    isLoading,
    isFetching,
  } = useGetIpInfoQuery(ipAddress, {
    skip: ipAddress === "",
  });

  const onSubmit = (data) => {
    const currentTime = Date.now();
    if (currentTime - lastRequestTime < 60000 / 5) {
      toast("لطفاً تا چند لحظه دیگر مجدداً تلاش کنید");
      return;
    }

    setIpAddress(data.ip);
    setLastRequestTime(currentTime);
  };

  useEffect(() => {
    if (ipInfo) {
      setIsVisible(true);
    }
  }, [ipInfo]);

  const onKeyPress = (e) => {
    onKeyNumber(e);
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div>
      <SearchedWrapper>
        <Heading>آی پی مد نظر خود را پیدا کنید</Heading>
        <SubHeading>
          اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید با
          استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا کنید.
          چه باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید، سپس روی
          "دریافت جزئیات IP" کلیک کنید.
        </SubHeading>
        <SearchedForm onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <SearchInput
              type="text"
              placeholder="جستجوی آدرس IP"
              {...register("ip", {
                required: "لطفاً آدرس IP را وارد کنید",
                pattern: {
                  value: (value) => validateIpv4(value) || validateIpv6(value),
                  message: "آدرس IP نامعتبر است",
                }
              })}
              onKeyPress={(e) => onKeyPress(e)}
            />
            <SearchButton type="submit">
              <img src="assets/img/search-normal.svg" />
            </SearchButton>
          </InputWrapper>
          {errors.ip && <ErrorMessage>{errors.ip.message}</ErrorMessage>}
        </SearchedForm>
      </SearchedWrapper>
      {ipInfo && (
        <IPInfoWrapper className={isVisible ? "visible" : ""}>
          <MapPlaceholder>
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps?q=${ipInfo.location.lat},${ipInfo.location.lng}&z=15&output=embed`}
              allowFullScreen
            />
          </MapPlaceholder>
          <IPInfoContainer>
            <IpAddressItem>
              <IPInfoLabel>Ip Address:</IPInfoLabel>
              <IPInfoValue>
                {ipInfo.ip} ({validateIpv4(ipInfo.ip) ? "IPv4" : "IPv6"})
              </IPInfoValue>
            </IpAddressItem>

            <LatitudeItem>
              <IPInfoLabel>Latitude:</IPInfoLabel>
              <IPInfoValue>{ipInfo.location.lat}</IPInfoValue>
            </LatitudeItem>

            <CountryItem>
              <IPInfoLabel>Country:</IPInfoLabel>
              <IPInfoValue>{ipInfo.location.country}</IPInfoValue>
            </CountryItem>

            <LongitudeItem>
              <IPInfoLabel>Longitude:</IPInfoLabel>
              <IPInfoValue>{ipInfo.location.lng}</IPInfoValue>
            </LongitudeItem>

            <RegionItem>
              <IPInfoLabel>Region:</IPInfoLabel>
              <IPInfoValue>{ipInfo.location.region}</IPInfoValue>
            </RegionItem>

            <CityItem>
              <IPInfoLabel>City:</IPInfoLabel>
              <IPInfoValue>{ipInfo.location.city}</IPInfoValue>
            </CityItem>
          </IPInfoContainer>
        </IPInfoWrapper>
      )}
      <ToastContainer />
    </div>
  );
};

export default IpSearchPage;
