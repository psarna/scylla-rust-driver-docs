(function() {var implementors = {};
implementors["byteorder"] = [{"text":"impl Ord for BigEndian","synthetic":false,"types":[]},{"text":"impl Ord for LittleEndian","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl Ord for Bytes","synthetic":false,"types":[]},{"text":"impl Ord for BytesMut","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;Ord&gt; Ord for AllowStdIo&lt;T&gt;","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl Ord for Level","synthetic":false,"types":[]},{"text":"impl Ord for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl Ord for Interest","synthetic":false,"types":[]},{"text":"impl Ord for Token","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl Ord for Sign","synthetic":false,"types":[]},{"text":"impl Ord for BigInt","synthetic":false,"types":[]},{"text":"impl Ord for BigUint","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; Ord for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Ord for Ident","synthetic":false,"types":[]}];
implementors["scylla"] = [{"text":"impl Ord for RequestOpcode","synthetic":false,"types":[]},{"text":"impl Ord for ResponseOpcode","synthetic":false,"types":[]},{"text":"impl Ord for Node","synthetic":false,"types":[]},{"text":"impl Ord for Token","synthetic":false,"types":[]}];
implementors["signal_hook_registry"] = [{"text":"impl Ord for SigId","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; Ord for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: Ord,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl Ord for Lifetime","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl Ord for Instant","synthetic":false,"types":[]}];
implementors["uuid"] = [{"text":"impl Ord for Hyphenated","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for HyphenatedRef&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Simple","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for SimpleRef&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Urn","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Ord for UrnRef&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Ord for Uuid","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()