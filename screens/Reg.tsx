import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Reg = () => {
  return (
    <View style={styles.reg}>
      <View style={styles.desktop2Wrapper}>
        <View style={styles.desktop2}>
          <Image
            style={styles.beautifulYoungWomanWithTeeIcon}
            resizeMode="cover"
            source={require("../assets/beautifulyoungwomanwithteethbraces-1.png")}
          />
          <View
            style={[styles.component1Wrapper, styles.component1WrapperPosition]}
          >
            <View style={styles.component1}>
              <Text style={[styles.male, styles.addFlexBox]}>Male</Text>
              <Image
                style={[styles.component1Child, styles.childPosition]}
                resizeMode="cover"
                source={require("../assets/ellipse-1.png")}
              />
            </View>
          </View>
          <View
            style={[styles.patientNameParent, styles.component1WrapperPosition]}
          >
            <Text style={styles.treatmentTypo}>Patient Name</Text>
            <View style={styles.genderParent}>
              <Text style={[styles.gender, styles.treatmentTypo]}>Gender</Text>
              <Text style={[styles.age, styles.treatmentTypo]}>Age</Text>
              <Text style={[styles.contactNo, styles.treatmentTypo]}>
                Contact No
              </Text>
              <Text style={[styles.address, styles.treatmentTypo]}>
                Address
              </Text>
              <Text style={[styles.treatment, styles.treatmentTypo]}>
                Treatment
              </Text>
              <Text style={[styles.medicalHistory, styles.treatmentTypo]}>
                Medical history
              </Text>
              <Text style={[styles.sitUp, styles.treatmentTypo]}>Sit up</Text>
              <Text style={[styles.dateOfTreatment, styles.treatmentTypo]}>
                Date of treatment
              </Text>
            </View>
          </View>
          <View style={[styles.component2, styles.componentPosition]}>
            <Image
              style={[styles.component2Child, styles.childPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.female, styles.addFlexBox]}>Female</Text>
          </View>
          <View style={[styles.component3, styles.componentPosition]}>
            <Image
              style={[styles.component3Child, styles.childPosition]}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Text style={[styles.other, styles.addFlexBox]}>Other</Text>
          </View>
          <View style={[styles.desktop2Inner, styles.vijayLayout]}>
            <View
              style={[styles.vijayOrthodonticClinicWrapper, styles.vijayLayout]}
            >
              <Text style={[styles.vijayOrthodonticClinic, styles.vijayLayout]}>
                Vijay Orthodontic Clinic
              </Text>
            </View>
          </View>
          <View style={[styles.desktop2Child, styles.desktop2ChildLayout1]} />
          <View style={[styles.desktop2Item, styles.desktop2ChildLayout]} />
          <View style={[styles.rectangleView, styles.desktop2ChildLayout1]} />
          <View style={[styles.desktop2Child1, styles.desktop2ChildLayout1]} />
          <View style={styles.desktop2Child2} />
          <View style={[styles.desktop2Child3, styles.desktop2ChildLayout]} />
          <View style={[styles.desktop2Child4, styles.desktop2ChildLayout]} />
          <View style={[styles.desktop2Child5, styles.desktop2ChildLayout1]} />
          <View style={styles.addWrapper}>
            <Text style={[styles.add, styles.addFlexBox]}>Add</Text>
          </View>
          <View style={[styles.updateWrapper, styles.wrapperFlexBox1]}>
            <Text style={[styles.add, styles.addFlexBox]}>Update</Text>
          </View>
          <View style={styles.deleteWrapper}>
            <Text style={[styles.add, styles.addFlexBox]}>Delete</Text>
          </View>
          <View style={[styles.clearWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.add, styles.addFlexBox]}>Clear</Text>
          </View>
          <View style={[styles.displayWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.add, styles.addFlexBox]}>Display</Text>
          </View>
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.search, styles.treatmentTypo]}>Search</Text>
          </View>
          <View style={[styles.searchWrapper, styles.wrapperFlexBox1]}>
            <Text style={[styles.add, styles.addFlexBox]}>Search</Text>
          </View>
          <Text style={[styles.home, styles.homeTypo]}>Home</Text>
          <Text style={[styles.registeration, styles.homeTypo]}>
            Registeration
          </Text>
          <View style={styles.desktop2Child6} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component1WrapperPosition: {
    top: 189,
    position: "absolute",
  },
  addFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
  },
  childPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "14.58%",
    top: "16.67%",
    height: "68.75%",
    overflow: "hidden",
    position: "absolute",
  },
  treatmentTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
  },
  componentPosition: {
    top: 256,
    height: 48,
    position: "absolute",
  },
  vijayLayout: {
    height: 131,
    width: 1438,
    top: 0,
    position: "absolute",
  },
  desktop2ChildLayout1: {
    height: 50,
    width: 328,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  desktop2ChildLayout: {
    left: 457,
    height: 50,
    width: 328,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  wrapperFlexBox1: {
    paddingHorizontal: Padding.p_43xl,
    justifyContent: "center",
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    position: "absolute",
  },
  wrapperFlexBox: {
    top: 1053,
    justifyContent: "center",
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_11xl,
    overflow: "hidden",
    position: "absolute",
  },
  groupChildLayout: {
    width: 463,
    height: 50,
    position: "absolute",
  },
  homeTypo: {
    fontSize: FontSize.size_17xl,
    top: 43,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  beautifulYoungWomanWithTeeIcon: {
    top: 120,
    left: -260,
    width: 2294,
    height: 1085,
    position: "absolute",
  },
  male: {
    left: "33.09%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
    top: "0%",
    position: "absolute",
  },
  component1Child: {
    width: "25%",
    right: "75%",
  },
  component1: {
    top: 67,
    left: 166,
    width: 136,
    height: 48,
    position: "absolute",
  },
  component1Wrapper: {
    left: 17,
    width: 289,
    height: 706,
  },
  gender: {
    left: 0,
    top: 0,
    fontWeight: "600",
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  age: {
    top: 79,
    left: 0,
    position: "absolute",
  },
  contactNo: {
    top: 158,
    left: 0,
    position: "absolute",
  },
  address: {
    top: 237,
    left: 0,
    position: "absolute",
  },
  treatment: {
    top: 316,
    left: 0,
    position: "absolute",
  },
  medicalHistory: {
    top: 395,
    left: 0,
    position: "absolute",
  },
  sitUp: {
    top: 474,
    left: 0,
    position: "absolute",
  },
  dateOfTreatment: {
    top: 553,
    left: -7,
    position: "absolute",
  },
  genderParent: {
    width: 273,
    height: 592,
    marginTop: 30,
  },
  patientNameParent: {
    left: 10,
  },
  component2Child: {
    width: "18.28%",
    right: "81.72%",
  },
  female: {
    left: "26.88%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
    top: "0%",
    position: "absolute",
  },
  component2: {
    left: 362,
    width: 186,
  },
  component3Child: {
    width: "20.48%",
    right: "79.52%",
  },
  other: {
    left: "34.94%",
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
    top: "0%",
    position: "absolute",
  },
  component3: {
    left: 558,
    width: 166,
  },
  vijayOrthodonticClinic: {
    fontSize: 96,
    fontWeight: "700",
    fontFamily: FontFamily.crimsonTextBold,
    textAlign: "left",
    color: Color.colorBlack,
    left: 0,
  },
  vijayOrthodonticClinicWrapper: {
    left: 0,
  },
  desktop2Inner: {
    left: 497,
  },
  desktop2Child: {
    top: 183,
    left: 456,
    height: 50,
  },
  desktop2Item: {
    top: 328,
  },
  rectangleView: {
    top: 407,
    left: 456,
    height: 50,
  },
  desktop2Child1: {
    top: 486,
    left: 456,
    height: 50,
  },
  desktop2Child2: {
    top: 573,
    height: 55,
    width: 328,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    left: 456,
    position: "absolute",
  },
  desktop2Child3: {
    top: 644,
  },
  desktop2Child4: {
    top: 731,
  },
  desktop2Child5: {
    top: 805,
    left: 452,
  },
  add: {
    fontSize: FontSize.size_29xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
  },
  addWrapper: {
    left: 2,
    paddingHorizontal: 99,
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_11xl,
    top: 938,
    overflow: "hidden",
    position: "absolute",
  },
  updateWrapper: {
    left: 329,
    top: 938,
    paddingHorizontal: Padding.p_43xl,
  },
  deleteWrapper: {
    left: 656,
    paddingHorizontal: 72,
    justifyContent: "center",
    paddingVertical: Padding.p_6xs,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_11xl,
    top: 938,
    overflow: "hidden",
    position: "absolute",
  },
  clearWrapper: {
    paddingHorizontal: 85,
    left: 0,
  },
  displayWrapper: {
    paddingHorizontal: 44,
    left: 329,
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_xl,
    width: 463,
    left: 0,
    top: 0,
  },
  search: {
    top: 6,
    left: 23,
    position: "absolute",
  },
  rectangleParent: {
    top: 160,
    left: 1193,
  },
  searchWrapper: {
    top: 147,
    left: 1701,
  },
  home: {
    left: 27,
  },
  registeration: {
    left: 174,
  },
  desktop2Child6: {
    top: 268,
    left: 1090,
    backgroundColor: "#e29b7f",
    width: 611,
    height: 677,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  desktop2: {
    backgroundColor: "#8cd2ef",
    overflow: "hidden",
    borderRadius: Border.br_31xl,
    width: 2034,
    height: 1205,
  },
  desktop2Wrapper: {
    width: 2034,
    left: 0,
    top: 0,
    position: "absolute",
  },
  reg: {
    flex: 1,
    width: "100%",
    height: 1205,
  },
});

export default Reg;
