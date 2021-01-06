package com.hust.sophia.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.hust.sophia.web.rest.TestUtil;

public class DmAmThanhTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmAmThanh.class);
        DmAmThanh dmAmThanh1 = new DmAmThanh();
        dmAmThanh1.setId(1L);
        DmAmThanh dmAmThanh2 = new DmAmThanh();
        dmAmThanh2.setId(dmAmThanh1.getId());
        assertThat(dmAmThanh1).isEqualTo(dmAmThanh2);
        dmAmThanh2.setId(2L);
        assertThat(dmAmThanh1).isNotEqualTo(dmAmThanh2);
        dmAmThanh1.setId(null);
        assertThat(dmAmThanh1).isNotEqualTo(dmAmThanh2);
    }
}
