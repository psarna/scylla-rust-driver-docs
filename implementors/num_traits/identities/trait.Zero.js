(function() {var implementors = {};
implementors["num_bigint"] = [{"text":"impl Zero for BigInt","synthetic":false,"types":[]},{"text":"impl Zero for BigUint","synthetic":false,"types":[]}];
implementors["num_complex"] = [{"text":"impl&lt;T:&nbsp;Clone + Num&gt; Zero for Complex&lt;T&gt;","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Zero for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["num_traits"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()