import Blob "mo:base/Blob";
import Nat8 "mo:base/Nat8";
import Text "mo:base/Text";

actor {
  public query func greet(arg : Blob) : async (Nat, ?Text) {
    let blob = arg;
    (blob.size(), Text.decodeUtf8(blob));
  };
};
