(function() {var implementors = {};
implementors["byteorder"] = [{"text":"impl PartialOrd&lt;BigEndian&gt; for BigEndian","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LittleEndian&gt; for LittleEndian","synthetic":false,"types":[]}];
implementors["bytes"] = [{"text":"impl PartialOrd&lt;Bytes&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8&gt;&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for Bytes","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Bytes&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;Bytes&gt; for &amp;'_ [u8]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;Bytes&gt; for &amp;'_ str","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for Bytes <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Bytes: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;[u8]&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for [u8]","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;str&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for str","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Vec&lt;u8&gt;&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for Vec&lt;u8&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;String&gt; for BytesMut","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BytesMut&gt; for String","synthetic":false,"types":[]},{"text":"impl&lt;'a, T:&nbsp;?Sized&gt; PartialOrd&lt;&amp;'a T&gt; for BytesMut <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BytesMut: PartialOrd&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;BytesMut&gt; for &amp;'_ [u8]","synthetic":false,"types":[]},{"text":"impl&lt;'_&gt; PartialOrd&lt;BytesMut&gt; for &amp;'_ str","synthetic":false,"types":[]}];
implementors["futures_util"] = [{"text":"impl&lt;T:&nbsp;PartialOrd&gt; PartialOrd&lt;AllowStdIo&lt;T&gt;&gt; for AllowStdIo&lt;T&gt;","synthetic":false,"types":[]}];
implementors["log"] = [{"text":"impl PartialOrd&lt;Level&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for Level","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;LevelFilter&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Level&gt; for LevelFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;Metadata&lt;'a&gt;&gt; for Metadata&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;MetadataBuilder&lt;'a&gt;&gt; for MetadataBuilder&lt;'a&gt;","synthetic":false,"types":[]}];
implementors["mio"] = [{"text":"impl PartialOrd&lt;Interest&gt; for Interest","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Token&gt; for Token","synthetic":false,"types":[]}];
implementors["num_bigint"] = [{"text":"impl PartialOrd&lt;Sign&gt; for Sign","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BigInt&gt; for BigInt","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;BigUint&gt; for BigUint","synthetic":false,"types":[]}];
implementors["num_rational"] = [{"text":"impl&lt;T:&nbsp;Clone + Integer&gt; PartialOrd&lt;Ratio&lt;T&gt;&gt; for Ratio&lt;T&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl PartialOrd&lt;Ident&gt; for Ident","synthetic":false,"types":[]}];
implementors["scylla"] = [{"text":"impl PartialOrd&lt;RequestOpcode&gt; for RequestOpcode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;ResponseOpcode&gt; for ResponseOpcode","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Node&gt; for Node","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Token&gt; for Token","synthetic":false,"types":[]}];
implementors["signal_hook_registry"] = [{"text":"impl PartialOrd&lt;SigId&gt; for SigId","synthetic":false,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;Array&gt; PartialOrd&lt;SmallVec&lt;A&gt;&gt; for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A::Item: PartialOrd,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl PartialOrd&lt;Lifetime&gt; for Lifetime","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl PartialOrd&lt;Instant&gt; for Instant","synthetic":false,"types":[]}];
implementors["uuid"] = [{"text":"impl PartialOrd&lt;Hyphenated&gt; for Hyphenated","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;HyphenatedRef&lt;'a&gt;&gt; for HyphenatedRef&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Simple&gt; for Simple","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;SimpleRef&lt;'a&gt;&gt; for SimpleRef&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Urn&gt; for Urn","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; PartialOrd&lt;UrnRef&lt;'a&gt;&gt; for UrnRef&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl PartialOrd&lt;Uuid&gt; for Uuid","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()