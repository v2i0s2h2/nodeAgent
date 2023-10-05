export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'greet' : IDL.Func(
        [IDL.Vec(IDL.Nat8)],
        [IDL.Nat, IDL.Opt(IDL.Text)],
        ['query'],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
